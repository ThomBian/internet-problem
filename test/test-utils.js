module.exports = {
    dataDriven
}

function dataDriven (dataSet, callback) {
    dataSet.forEach(function(element) {
        callback(element);
    }, this);
}