module.exports = {
    'sessionSecret': 'HAPPYDENT',
    'sessionExpirationInSeconds' : 8640000,

    'facebookAuth' : {
		    'clientID' 		: '{{insert your clientID}}',
        'clientSecret'  : '{{inser your clientSecret}}',
		    'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	  }
};
