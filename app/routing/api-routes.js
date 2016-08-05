var path = require('path');
var friends = require('../data/friends.js');


module.exports = function(app){
        app.get('/api/friends', function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var counthold = [];
        var difference = 0;
        var user = req.body;
        var bff = {};

        for(var i = 0;i <friends.length; i++ ){


            for(var j =0; j<user.ratings.length; j++){
                difference += Math.abs(user.rating[j]- friends[i].ratings[i]);

            };
            counthold.push(difference);
            difference = 0;
        };

        var bestestBFL = Math.min.apply(Math,counthold);

        for (var i=0; i<friends.length; i++){
            for (var j=0; j<user.ratings.length; j++){ 
                difference += Math.abs(user.rating[j]- friends[i].ratings[i]); 
            };
            if(difference === bestestBFL){
                bff = friends[i];
            }
            difference = 0;
        };
        friends.push(req.body);
        res.json(bff);
    });

}