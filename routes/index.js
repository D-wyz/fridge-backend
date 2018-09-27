var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auto', function (req, res, next) {
  res.send([{
      "name": "apple",
      "image": "apple.jpg"
    }, {
      "name": "applesauce",
      "image": "applesauce.jpg"
    }, {
      "name": "apple juice",
      "image": "apple-juice.jpg"
    }, {
      "name": "apple cider",
      "image": "apple-cider.jpg"
    }, {
      "name": "apple jelly",
      "image": "apple-jelly.jpg"
    }, {
      "name": "apple butter",
      "image": "apple-jelly.jpg"
    }, {
      "name": "apple pie spice",
      "image": "garam-masala.jpg"
    }, {
      "name": "apple pie filling",
      "image": "apple-pie.jpg"
    }, {
      "name": "apple cider vinegar",
      "image": "apple-cider-vinegar.jpg"
    }, {
      "name": "applewood smoked bacon",
      "image": "raw-bacon.png"
    }]
)
})

router.get('/search', function (req, res, next) {
  res.send(
    [
      {
      "id": 556470,
      "title": "Apple fritters",
      "image": "https://spoonacular.com/recipeImages/556470-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 3,
      "missedIngredientCount": 0,
      "likes": 243
    }, {
      "id": 47950,
      "title": "Cinnamon Apple Crisp",
      "image": "https://spoonacular.com/recipeImages/47950-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 3,
      "missedIngredientCount": 0,
      "likes": 35
    }, {
      "id": 534573,
      "title": "Brown Butter Apple Crumble",
      "image": "https://spoonacular.com/recipeImages/534573-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 3,
      "missedIngredientCount": 0,
      "likes": 7
    }, {
      "id": 47732,
      "title": "Apple Tart",
      "image": "https://spoonacular.com/recipeImages/47732-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 3,
      "missedIngredientCount": 0,
      "likes": 0
    }, {
      "id": 47891,
      "title": "Apple Tart",
      "image": "https://spoonacular.com/recipeImages/47891-312x231.jpg",
      "imageType": "jpg",
      "usedIngredientCount": 3,
      "missedIngredientCount": 0,
      "likes": 0
    }
  ]
  )
})

router.get('/recipe', function (req, res, next) {
  res.send({
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 9,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 10,
    "cookingMinutes": 10,
    "sourceUrl": "http://feedmephoebe.com/2013/11/job-food52s-pan-roasted-cauliflower/",
    "spoonacularSourceUrl": "https://spoonacular.com/on-the-job-pan-roasted-cauliflower-from-food52-479101",
    "aggregateLikes": 225,
    "spoonacularScore": 97,
    "healthScore": 46,
    "creditText": "Feed Me Phoebe",
    "sourceName": "Feed Me Phoebe",
    "pricePerServing": 199.25,
    "extendedIngredients": [{
      "id": 18079,
      "aisle": "Pasta and Rice",
      "image": "breadcrumbs.jpg",
      "consitency": "solid",
      "name": "breadcrumbs",
      "original": "1/2 cup fresh breadcrumbs (I used gluten-free!)",
      "originalString": "1/2 cup fresh breadcrumbs (I used gluten-free!)",
      "originalName": null,
      "amount": 0.5,
      "unit": "cup",
      "meta": ["fresh", "(I used gluten-free!)"],
      "metaInformation": ["fresh", "(I used gluten-free!)"],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }, {
      "id": 11135,
      "aisle": "Produce",
      "image": "cauliflower.jpg",
      "consitency": "solid",
      "name": "cauliflower",
      "original": "1 head of cauliflower",
      "originalString": "1 head of cauliflower",
      "originalName": null,
      "amount": 1,
      "unit": "head",
      "meta": [],
      "metaInformation": [],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "head",
          "unitLong": "head"
        },
        "metric": {
          "amount": 1,
          "unitShort": "head",
          "unitLong": "head"
        }
      }
    }, {
      "id": 11297,
      "aisle": "Produce",
      "image": "parsley.jpg",
      "consitency": "solid",
      "name": "fresh parsley",
      "original": "1 handful parsley, chopped",
      "originalString": "1 handful parsley, chopped",
      "originalName": null,
      "amount": 1,
      "unit": "handful",
      "meta": ["chopped"],
      "metaInformation": ["chopped"],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "handful",
          "unitLong": "handful"
        },
        "metric": {
          "amount": 1,
          "unitShort": "handful",
          "unitLong": "handful"
        }
      }
    }, {
      "id": 2063,
      "aisle": "Produce",
      "image": "rosemary.jpg",
      "consitency": "solid",
      "name": "fresh rosemary",
      "original": "2 teaspoons fresh rosemary, chopped",
      "originalString": "2 teaspoons fresh rosemary, chopped",
      "originalName": null,
      "amount": 2,
      "unit": "teaspoons",
      "meta": ["fresh", "chopped"],
      "metaInformation": ["fresh", "chopped"],
      "measures": {
        "us": {
          "amount": 2,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 2,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    }, {
      "id": 9297,
      "aisle": "Dried Fruits;Produce;Baking",
      "image": "golden-raisins.jpg",
      "consitency": "liquid",
      "name": "golden raisins",
      "original": "1/4 cup golden raisins, chopped",
      "originalString": "1/4 cup golden raisins, chopped",
      "originalName": null,
      "amount": 0.25,
      "unit": "cup",
      "meta": ["chopped"],
      "metaInformation": ["chopped"],
      "measures": {
        "us": {
          "amount": 0.25,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 59.147,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }, {
      "id": 4053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consitency": "liquid",
      "name": "olive oil",
      "original": "1/4 cup olive oil, divided",
      "originalString": "1/4 cup olive oil, divided",
      "originalName": null,
      "amount": 0.25,
      "unit": "cup",
      "meta": ["divided"],
      "metaInformation": ["divided"],
      "measures": {
        "us": {
          "amount": 0.25,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 59.147,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }, {
      "id": 12147,
      "aisle": "Produce;Baking",
      "image": "pine-nuts.jpg",
      "consitency": "solid",
      "name": "pine nuts",
      "original": "1/2 cup pine nuts",
      "originalString": "1/2 cup pine nuts",
      "originalName": null,
      "amount": 0.5,
      "unit": "cup",
      "meta": [],
      "metaInformation": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "cups",
          "unitLong": "cups"
        },
        "metric": {
          "amount": 118.294,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    }, {
      "id": 1012047,
      "aisle": "Spices and Seasonings",
      "image": "salt.jpg",
      "consitency": "solid",
      "name": "sea salt",
      "original": "1 teaspoon sea salt",
      "originalString": "1 teaspoon sea salt",
      "originalName": null,
      "amount": 1,
      "unit": "teaspoon",
      "meta": [],
      "metaInformation": [],
      "measures": {
        "us": {
          "amount": 1,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        },
        "metric": {
          "amount": 1,
          "unitShort": "tsp",
          "unitLong": "teaspoon"
        }
      }
    }, {
      "id": 10211111,
      "aisle": "Ethnic Foods;Spices and Seasonings",
      "image": "sumac.png",
      "consitency": "solid",
      "name": "sumac",
      "original": "1/2 teaspoon sumac",
      "originalString": "1/2 teaspoon sumac",
      "originalName": null,
      "amount": 0.5,
      "unit": "teaspoon",
      "meta": [],
      "metaInformation": [],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    }],
    "id": 479101,
    "title": "On the Job: Pan Roasted Cauliflower From Food52",
    "readyInMinutes": 20,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/479101-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": ["side dish"],
    "diets": ["dairy free"],
    "occasions": [],
    "winePairing": {
      "pairedWines": [],
      "pairingText": "",
      "productMatches": []
    },
    "instructions": "Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat. Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside. Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper. Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.",
    "analyzedInstructions": [{
      "name": "",
      "steps": [{
        "number": 1,
        "step": "Cut the florets off the stems and and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat.",
        "ingredients": [{
          "id": 11135,
          "name": "cauliflower",
          "image": "cauliflower.jpg"
        }, {
          "id": 4053,
          "name": "olive oil",
          "image": "olive-oil.jpg"
        }],
        "equipment": [{
          "id": 404645,
          "name": "frying pan",
          "image": "pan.png"
        }]
      }, {
        "number": 2,
        "step": "Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside.",
        "ingredients": [{
          "id": 11135,
          "name": "cauliflower",
          "image": "cauliflower.jpg"
        }, {
          "id": 4053,
          "name": "olive oil",
          "image": "olive-oil.jpg"
        }, {
          "id": 12147,
          "name": "pine nuts",
          "image": "pine-nuts.jpg"
        }, {
          "id": 10211111,
          "name": "sumac",
          "image": "sumac.png"
        }, {
          "id": 2047,
          "name": "salt",
          "image": "salt.jpg"
        }],
        "equipment": [{
          "id": 404645,
          "name": "frying pan",
          "image": "pan.png"
        }],
        "length": {
          "number": 15,
          "unit": "minutes"
        }
      }, {
        "number": 3,
        "step": "Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper.",
        "ingredients": [{
          "id": 18079,
          "name": "breadcrumbs",
          "image": "breadcrumbs.jpg"
        }, {
          "id": 1082047,
          "name": "kosher salt",
          "image": "salt.jpg"
        }, {
          "id": 4053,
          "name": "olive oil",
          "image": "olive-oil.jpg"
        }],
        "equipment": [{
          "id": 404645,
          "name": "frying pan",
          "image": "pan.png"
        }]
      }, {
        "number": 4,
        "step": "Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.",
        "ingredients": [{
          "id": 18079,
          "name": "breadcrumbs",
          "image": "breadcrumbs.jpg"
        }, {
          "id": 11135,
          "name": "cauliflower",
          "image": "cauliflower.jpg"
        }, {
          "id": 12147,
          "name": "pine nuts",
          "image": "pine-nuts.jpg"
        }, {
          "id": 11297,
          "name": "parsley",
          "image": "parsley.jpg"
        }, {
          "id": 2047,
          "name": "salt",
          "image": "salt.jpg"
        }],
        "equipment": []
      }]
    }],
    "creditsText": "Feed Me Phoebe"
  })
})

module.exports = router;
