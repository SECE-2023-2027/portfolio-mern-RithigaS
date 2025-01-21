// Plotly Pie Chart
const data = [{
    values: [90, 85, 85, 50, 80], // Percentages of each skill
    labels: ['C', 'Python', 'Java', 'JavaScript', 'HTML/CSS'], // Skills
    type: 'pie',
    textinfo: 'label+percent',
    insidetextorientation: 'radial',
    marker: {
        colors: ['#6c63ff', '#4e44ce', '#8f8bff', '#d1c4ff', '#a095ff']
    }
}];

const layout = {
    title: 'Skill Proficiency',
    height: 400,
    width: 400,
    showlegend: false,
    margin: { t: 50, b: 20, l: 20, r: 20 }
};

Plotly.newPlot('skills-chart', data, layout);
