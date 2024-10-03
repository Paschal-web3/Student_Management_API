const getGrade = (score) => {
    if (score >= 70) {
        return 'A';
    } else if (score >= 60) {
        return 'B';
    } else if (score >= 50) {
        return 'C';
    } else if (score >= 48) {
        return 'D';
    } else {
        return 'F';
    }
};
module.exports = getGrade;