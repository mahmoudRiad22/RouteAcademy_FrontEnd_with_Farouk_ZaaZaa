
async function loadWeeksData() {
    try {
        const response = await fetch('../../all_indexes.json');
        if (!response.ok) throw new Error('File not found');
        
        const weeksData = await response.json();
        // console.log('Weeks data loaded:', weeksData);
        return weeksData;
    } catch (error) {
        console.error('Error loading JSON:', error);
        return [];
    }
}

loadWeeksData().then(weeksData => {
    console.log('Data ready:', weeksData);
});