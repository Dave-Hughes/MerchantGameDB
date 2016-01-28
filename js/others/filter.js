angular.module('mainApp')

	//filter change space ( ) to underscore (_)
	.filter('spaceless',function() {
    return function(input) {
        if (input) {
            return input.replace(/\s+/g, '_');
        }
    }
	})

	//filter normalize stat
	.filter('changeStat',function() {
    return function(input)
		{
		if(input == "hpBns"){input = "HP";}
		else if(input == "atkBns"){input = "Atk";}
		else if(input == "matkBns"){input = "mAtk";}
		else if(input == "defBns"){input = "Def";}
		else if(input == "mdefBns"){input = "mDef";}
		else if(input == "accBns"){input = "Acc";}
		else if(input == "critBns"){input = "Crit";}
		else if(input == "str"){input = "Str";}
		else if(input == "dex"){input = "Dex";}
		else if(input == "int"){input = "Int";}
		else if(input == "lckMod"){input = "Luck";}
		else if(input == "gldMod"){input = "Gold";}
		else if(input == "expMod"){input = "Exp";}
		return input;
		}
	});