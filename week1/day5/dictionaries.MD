# Dictionaries

- a book of words and their definitions
- has a key and a value
- can contain any data type

## Retrieving Data

- `["key name"]` retrieves the value
- `.get("key name")` retrieves the value or returns `none`
- `.values()` returns all values of a dictionary
- `.get()` takes a second argument and if value does not exist, returns second argument instead of `none`

## Checking if a Key Exists

- `in` or `not in` operators used in conditional statements
```
if "key" in dictionary:
   do something
```

## Updating or Adding a Value

- use index syntax `dictionary["key"] = "new value"`

## Iterating Over a Dictionary

```
for key, value in dictionary.items():
    print("Dictionary's %s is %s" % (key, value))
```

-The key/value pairs may not return in a predictable order

## Iterating Over a LIST in a Dictionary

```
for item in dictionary["key"]:
    print("%s has %s" % (dictionary["other key"], item))
```

## Removing a Key

- use the `del` keyword
- `del dictionary["keyword"]`

## Reading from and Writing to a File

- use the function `open()`
    - pass `open()` two arguments
    - the name of the file as a string
    - a "mode" that specifies if you intend to read or write

```
file_name = "to-do-list.txt"
with open(file_name, "r") as file_handle:
    contents = file_handle.read()
    print(contents)
```

- the `with-as` syntax creates a variable that can be used to access what's inside

- Formatting or encoding data for saving to a file or transmitting over a network is also known as **serialization**.

- The act of decoding data that has been saved to a file or transmitted over a network is known as **deserialization**.

# JSON

- JSON stands for *JavaScript Object Notation*
- `json.dump()` writes to the file
- `json.load()` reads from the file
- `pickle` can be used the same way as `json` but writes to binary