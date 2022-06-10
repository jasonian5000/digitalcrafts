superhero = {
    "name": "Wonder Woman",
    "alias": "Diana Prince",
    "gear": [
        "Lasso of Truth",
        "Bracelets of Submission"
    ],
    "vehicle": {
        "title": "Invisible Jet",
        "speed": "2000 mph",
    }
}

hero_weakness = superhero.get("weakness", [])
print(hero_weakness)

for key, value in superhero.items():
    print("Superhero's %s is %s" % (key, value))