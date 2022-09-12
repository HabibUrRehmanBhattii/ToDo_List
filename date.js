// getDate() will aactivate here!! 
exports.getDate = function() {

    const today = new Date();
    // Assiging date to there catagries

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    // fecting data accourding to need
    return today.toLocaleDateString("en-Us", option);
     
};

exports.getDay = function(){

    const today = new Date();

    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-Us", options);
};