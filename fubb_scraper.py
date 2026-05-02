import requests
import csv
import json

# Configuración de nombres para normalizar
TEAM_MAPPING = {
    "D. SPORTING": "Defensor",
    "DEFENSOR SPORTING": "Defensor",
    "D SPORTING": "Defensor",
    "HEBRAICA Y MACABI": "Hebraica",
    "H. MACABI": "Hebraica",
    "HEBRAICA MACABI": "Hebraica",
    "NACIONAL": "Nacional",
    "PEÑAROL": "Peñarol",
    "AGUADA": "Aguada",
    "MALVÍN": "Malvín",
    "MALVIN": "Malvín"
}

TARGET_TEAMS = ["Defensor", "Nacional", "Peñarol", "Hebraica", "Malvín", "Aguada"]

PHASES = [
    {"name": "Clasificatorio LUB 25/26", "url_name": "Clasificatorio%20LUB%2025%2F26"},
    {"name": "Título LUB 25/26", "url_name": "Titulo%20LUB%2025%2F26"}
]

BASE_API_URL = "https://fubb.whsports.com/api/v1/schedule?phaseName={}"

def normalize_name(name):
    name_upper = name.upper().strip()
    return TEAM_MAPPING.get(name_upper, name)

def get_results():
    all_matches = []
    
    for phase in PHASES:
        print(f"Obteniendo datos de: {phase['name']}...")
        url = BASE_API_URL.format(phase['url_name'])
        
        try:
            response = requests.get(url)
            response.raise_for_status()
            data = response.json()
            
            # El JSON de WhSports suele tener una estructura de días y partidos
            # Dependiendo de la versión exacta de la API, esto puede variar ligeramente
            # Si 'data' es una lista de partidos directamente:
            matches = data if isinstance(data, list) else data.get('matches', [])
            
            for m in matches:
                # Extraer nombres y scores
                home_team_raw = m.get('homeTeam', {}).get('name', '')
                away_team_raw = m.get('awayTeam', {}).get('name', '')
                home_score = m.get('homeScore')
                away_score = m.get('awayScore')
                
                # Solo procesar si hay score
                if home_score is None or away_score is None:
                    continue
                    
                home_team = normalize_name(home_team_raw)
                away_team = normalize_name(away_team_raw)
                
                # Filtrar si ambos equipos están en nuestra lista de interés
                if home_team in TARGET_TEAMS and away_team in TARGET_TEAMS:
                    all_matches.append({
                        "HomeTeam": home_team,
                        "AwayTeam": away_team,
                        "HomeScore": home_score,
                        "AwayScore": away_score,
                        "Phase": phase['name']
                    })
                    
        except Exception as e:
            print(f"Error al procesar {phase['name']}: {e}")

    return all_matches

def save_to_csv(matches, filename="resultados_lub.csv"):
    if not matches:
        print("No se encontraron partidos para exportar.")
        return
        
    keys = matches[0].keys()
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        dict_writer = csv.DictWriter(f, fieldnames=keys)
        dict_writer.writeheader()
        dict_writer.writerows(matches)
    print(f"Éxito: Se han guardado {len(matches)} partidos en {filename}")

if __name__ == "__main__":
    results = get_results()
    save_to_csv(results)
