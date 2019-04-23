# email-token-pair

Small script to generate unique tokens to pair an email address. Script takes an CSV file containing email addresses as an input and creates tweo files as output: one that contains email and token pairs and second which only contains the used tokens.

## Installation

```bash
# clone the project
git clone git@github.com:vihreatnuoret/email-token-pair.git
# move to the project directory
cd email-token-pair
# install dependencies
npm install

```

## Usage

```bash

node index.js --input emails.csv --output list.csv --tokens tokens.csv

# or

npm start --input emails.csv --output list.csv --tokens tokens.csv

```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `--input` `-i` | example_input.csv | CSV file to read in |
| `--output` `-o` | output.csv | Output filename |
| `--tokens` `-t` | tokens.csv | Tokens output filename |
| `--help` `-h` | | Prints this help |

## File examples

**example_input.csv**

```csv
email
test.user1@example.com
test.user2@example.com
test.user3@example.com
```

**output.csv**

```csv
email,token
test.user1@example.com,11d951d2-ddae-4639-908d-562ef251a9c8
test.user2@example.com,b58c7593-8ec6-4fc2-b3fa-1d7a2865bab0
test.user3@example.com,ac036062-0ffa-4f0d-b807-dbbfb0d3365f
```

**tokens.csv**
```csv
token
11d951d2-ddae-4639-908d-562ef251a9c8
b58c7593-8ec6-4fc2-b3fa-1d7a2865bab0
ac036062-0ffa-4f0d-b807-dbbfb0d3365f
```

## Context

This script can be used to anonymize users by generating tokens for the list of emails. The `output.csv` file can be used to create a mailing list to send the token to every user and then the `tokens.csv` can be used to verify user without revealing their identtity. The script is planned to be used when creating voting forms for members.