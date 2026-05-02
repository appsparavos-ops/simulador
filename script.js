const TEAMS_DATA = {
    "Peñarol": { points: 51, played: 0, won: 0, lost: 0 },
    "Nacional": { points: 47, played: 0, won: 0, lost: 0 },
    "Malvín": { points: 47, played: 0, won: 0, lost: 0 },
    "Hebraica": { points: 47, played: 0, won: 0, lost: 0 },
    "Aguada": { points: 47, played: 0, won: 0, lost: 0 },
    "Defensor": { points: 46, played: 0, won: 0, lost: 0 }
};

// Historial de partidos extraído de Libro1.csv
const HISTORICAL_MATCHES = [
    // Defensor vs Nacional
    { t1: "Defensor", t2: "Nacional", s1: 61, s2: 80 },
    { t1: "Defensor", t2: "Nacional", s1: 82, s2: 73 },
    { t1: "Defensor", t2: "Nacional", s1: 68, s2: 80 },
    // Defensor vs Peñarol
    { t1: "Defensor", t2: "Peñarol", s1: 72, s2: 85 },
    { t1: "Defensor", t2: "Peñarol", s1: 81, s2: 84 },
    { t1: "Defensor", t2: "Peñarol", s1: 80, s2: 88 },
    { t1: "Defensor", t2: "Peñarol", s1: 92, s2: 84 },
    // Defensor vs Hebraica
    { t1: "Defensor", t2: "Hebraica", s1: 98, s2: 84 },
    { t1: "Defensor", t2: "Hebraica", s1: 90, s2: 91 },
    { t1: "Defensor", t2: "Hebraica", s1: 87, s2: 90 },
    { t1: "Defensor", t2: "Hebraica", s1: 84, s2: 80 },
    // Defensor vs Malvín
    { t1: "Defensor", t2: "Malvín", s1: 76, s2: 92 },
    { t1: "Defensor", t2: "Malvín", s1: 76, s2: 85 },
    { t1: "Defensor", t2: "Malvín", s1: 83, s2: 85 },
    { t1: "Defensor", t2: "Malvín", s1: 80, s2: 79 },
    // Defensor vs Aguada
    { t1: "Defensor", t2: "Aguada", s1: 76, s2: 90 },
    { t1: "Defensor", t2: "Aguada", s1: 98, s2: 92 },
    { t1: "Defensor", t2: "Aguada", s1: 81, s2: 97 },
    { t1: "Defensor", t2: "Aguada", s1: 88, s2: 60 },

    // Nacional vs Peñarol
    { t1: "Nacional", t2: "Peñarol", s1: 62, s2: 87 },
    { t1: "Nacional", t2: "Peñarol", s1: 69, s2: 82 },
    { t1: "Nacional", t2: "Peñarol", s1: 78, s2: 71 },
    { t1: "Nacional", t2: "Peñarol", s1: 84, s2: 82 },
    // Nacional vs Hebraica
    { t1: "Nacional", t2: "Hebraica", s1: 89, s2: 79 },
    { t1: "Nacional", t2: "Hebraica", s1: 81, s2: 102 },
    { t1: "Nacional", t2: "Hebraica", s1: 111, s2: 80 },
    { t1: "Nacional", t2: "Hebraica", s1: 81, s2: 79 },
    // Nacional vs Malvín
    { t1: "Nacional", t2: "Malvín", s1: 75, s2: 82 },
    { t1: "Nacional", t2: "Malvín", s1: 79, s2: 53 },
    { t1: "Nacional", t2: "Malvín", s1: 88, s2: 90 },
    { t1: "Nacional", t2: "Malvín", s1: 71, s2: 69 },
    // Nacional vs Aguada
    { t1: "Nacional", t2: "Aguada", s1: 82, s2: 79 },
    { t1: "Nacional", t2: "Aguada", s1: 94, s2: 98 },
    { t1: "Nacional", t2: "Aguada", s1: 101, s2: 82 },

    // Peñarol vs Hebraica
    { t1: "Peñarol", t2: "Hebraica", s1: 79, s2: 69 },
    { t1: "Peñarol", t2: "Hebraica", s1: 97, s2: 87 },
    // Peñarol vs Malvín
    { t1: "Peñarol", t2: "Malvín", s1: 89, s2: 79 },
    { t1: "Peñarol", t2: "Malvín", s1: 89, s2: 67 },
    { t1: "Peñarol", t2: "Malvín", s1: 96, s2: 67 },
    { t1: "Peñarol", t2: "Malvín", s1: 96, s2: 68 },
    // Peñarol vs Aguada
    { t1: "Peñarol", t2: "Aguada", s1: 103, s2: 89 },
    { t1: "Peñarol", t2: "Aguada", s1: 80, s2: 91 },
    { t1: "Peñarol", t2: "Aguada", s1: 80, s2: 86 },
    { t1: "Peñarol", t2: "Aguada", s1: 103, s2: 95 },

    // Hebraica vs Malvín
    { t1: "Hebraica", t2: "Malvín", s1: 52, s2: 61 },
    { t1: "Hebraica", t2: "Malvín", s1: 87, s2: 83 },
    { t1: "Hebraica", t2: "Malvín", s1: 76, s2: 90 },
    { t1: "Hebraica", t2: "Malvín", s1: 73, s2: 84 },
    // Hebraica vs Aguada
    { t1: "Hebraica", t2: "Aguada", s1: 78, s2: 79 },
    { t1: "Hebraica", t2: "Aguada", s1: 77, s2: 97 },
    { t1: "Hebraica", t2: "Aguada", s1: 100, s2: 102 },

    // Malvín vs Aguada
    { t1: "Malvín", t2: "Aguada", s1: 82, s2: 94 },
    { t1: "Malvín", t2: "Aguada", s1: 89, s2: 72 },
    { t1: "Malvín", t2: "Aguada", s1: 64, s2: 88 }
];

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const backBtn = document.getElementById('back-btn');
    const suggestBtn = document.getElementById('suggest-btn');

    calculateBtn.addEventListener('click', () => {
        updateStandings();
        if (window.innerWidth <= 768) {
            document.querySelector('.inputs-card').classList.add('hidden');
            document.querySelector('.table-card').classList.add('active');
            window.scrollTo(0, 0);
        }
    });

    backBtn.addEventListener('click', () => {
        document.querySelector('.inputs-card').classList.remove('hidden');
        document.querySelector('.table-card').classList.remove('active');
        window.scrollTo(0, 0);
    });

    suggestBtn.addEventListener('click', suggestProbableResults);

    // Initial render
    updateStandings();
});

function suggestProbableResults() {
    const pairs = [
        { t1: "Peñarol", t2: "Hebraica", id1: "score-pen", id2: "score-heb" },
        { t1: "Malvín", t2: "Aguada", id1: "score-mal", id2: "score-agu" },
        { t1: "Defensor", t2: "Nacional", id1: "score-def", id2: "score-nac" }
    ];

    pairs.forEach(pair => {
        const matches = HISTORICAL_MATCHES.filter(m =>
            (m.t1 === pair.t1 && m.t2 === pair.t2) ||
            (m.t1 === pair.t2 && m.t2 === pair.t1)
        );

        if (matches.length > 0) {
            let sum1 = 0, sum2 = 0;
            matches.forEach(m => {
                if (m.t1 === pair.t1) {
                    sum1 += m.s1;
                    sum2 += m.s2;
                } else {
                    sum1 += m.s2;
                    sum2 += m.s1;
                }
            });
            const avg1 = sum1 / matches.length;
            const avg2 = sum2 / matches.length;

            // Rachas actuales (FUBB)
            const streaks = {
                "Peñarol": 3,   // W3
                "Nacional": 2,  // W2
                "Defensor": 1,  // W1
                "Malvín": -1,   // L1
                "Hebraica": -2, // L2
                "Aguada": -3    // L3
            };

            // Aplicar peso de la racha (+/- 1.5 puntos por cada partido en racha)
            const streakWeight1 = (streaks[pair.t1] || 0) * 1.5;
            const streakWeight2 = (streaks[pair.t2] || 0) * 1.5;

            // Añadir cuota de azar (+/- 5 puntos)
            const randomFactor1 = Math.floor(Math.random() * 11) - 5;
            const randomFactor2 = Math.floor(Math.random() * 11) - 5;
            
            let s1 = Math.max(0, Math.round(avg1 + streakWeight1 + randomFactor1));
            let s2 = Math.max(0, Math.round(avg2 + streakWeight2 + randomFactor2));
            
            // En basketball no hay empates, forzamos un ganador si hay igualdad
            if (s1 === s2) {
                s1 += 1; 
            }
            
            document.getElementById(pair.id1).value = s1;
            document.getElementById(pair.id2).value = s2;
        }
    });
}

function updateStandings() {
    // 1. Get user inputs
    const lastRound = [
        { t1: "Peñarol", t2: "Hebraica", s1: parseInt(document.getElementById('score-pen').value) || 0, s2: parseInt(document.getElementById('score-heb').value) || 0 },
        { t1: "Malvín", t2: "Aguada", s1: parseInt(document.getElementById('score-mal').value) || 0, s2: parseInt(document.getElementById('score-agu').value) || 0 },
        { t1: "Defensor", t2: "Nacional", s1: parseInt(document.getElementById('score-def').value) || 0, s2: parseInt(document.getElementById('score-nac').value) || 0 }
    ];

    // 2. Initialize current points
    const standings = {};
    for (const team in TEAMS_DATA) {
        standings[team] = {
            name: team,
            points: TEAMS_DATA[team].points,
            won: 0,
            lost: 0,
            played: 0
        };
    }

    // 3. Add last round results (Win = 2, Loss = 1)
    lastRound.forEach(match => {
        if (match.s1 === 0 && match.s2 === 0) return; // Skip if no scores

        standings[match.t1].played++;
        standings[match.t2].played++;

        if (match.s1 > match.s2) {
            standings[match.t1].points += 2;
            standings[match.t1].won++;
            standings[match.t2].points += 1;
            standings[match.t2].lost++;
        } else {
            standings[match.t2].points += 2;
            standings[match.t2].won++;
            standings[match.t1].points += 1;
            standings[match.t1].lost++;
        }
    });

    // 4. Group teams by points
    const teamsArray = Object.values(standings);
    const groups = {};
    teamsArray.forEach(t => {
        if (!groups[t.points]) groups[t.points] = [];
        groups[t.points].push(t);
    });

    // 5. Sort each group using FIBA rules
    const sortedPoints = Object.keys(groups).map(Number).sort((a, b) => b - a);
    let finalOrder = [];
    let tiebreakNotes = [];

    sortedPoints.forEach(pts => {
        const tiedTeams = groups[pts];
        if (tiedTeams.length === 1) {
            finalOrder.push(tiedTeams[0]);
        } else {
            const sortedTie = sortTiedTeams(tiedTeams, lastRound);
            finalOrder = finalOrder.concat(sortedTie.sorted);
            if (sortedTie.note) tiebreakNotes.push(`En el empate a <b>${pts} puntos</b>: ${sortedTie.note}`);
        }
    });

    // 6. Render table
    renderTable(finalOrder);

    // 7. Render tiebreak notes
    const notesEl = document.getElementById('tiebreak-info');
    notesEl.innerHTML = tiebreakNotes.length > 0
        ? tiebreakNotes.map(n => `<p>${n}</p>`).join('')
        : "No hay empates que requieran desempate FIBA.";
}

function sortTiedTeams(teams, lastRound) {
    const names = teams.map(t => t.name);
    const allMatches = HISTORICAL_MATCHES.concat(lastRound);

    // Filter matches between tied teams only
    const headToHeadMatches = allMatches.filter(m => names.includes(m.t1) && names.includes(m.t2));

    // Calculate head-to-head stats
    const stats = {};
    names.forEach(n => stats[n] = { pts: 0, diff: 0, scored: 0 });

    headToHeadMatches.forEach(m => {
        if (m.s1 === 0 && m.s2 === 0) return;

        stats[m.t1].scored += m.s1;
        stats[m.t1].diff += (m.s1 - m.s2);
        stats[m.t2].scored += m.s2;
        stats[m.t2].diff += (m.s2 - m.s1);

        if (m.s1 > m.s2) {
            stats[m.t1].pts += 2;
            stats[m.t2].pts += 1;
        } else {
            stats[m.t2].pts += 2;
            stats[m.t1].pts += 1;
        }
    });

    // Sort teams based on criteria
    const sorted = [...teams].sort((a, b) => {
        const sA = stats[a.name];
        const sB = stats[b.name];

        // 1. Classification points in H2H
        if (sB.pts !== sA.pts) return sB.pts - sA.pts;

        // 2. Point difference in H2H
        if (sB.diff !== sA.diff) return sB.diff - sA.diff;

        // 3. Points scored in H2H
        return sB.scored - sA.scored;
    });

    let note = "";
    if (teams.length === 2) {
        note = `Gana el desempate <b>${sorted[0].name}</b> sobre ${sorted[1].name} por ventaja en enfrentamientos directos.`;
    } else {
        note = `Se aplicó mini-tabla entre ${names.join(', ')}. El orden resultante es: ${sorted.map(s => s.name).join(' > ')}.`;
    }

    return { sorted, note };
}

function renderTable(teams) {
    const tbody = document.querySelector('#standings-table tbody');
    tbody.innerHTML = '';

    teams.forEach((team, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span class="pos">${index + 1}</span></td>
            <td>
                <div class="team-cell">
                    <span class="team-name">${team.name}</span>
                </div>
            </td>
            <td class="points-cell">${team.points}</td>
        `;
        tbody.appendChild(tr);
    });
}
