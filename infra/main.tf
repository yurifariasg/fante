provider "aws" {
  region = "eu-central-1"
}

resource "aws_dynamodb_table" "highlights" {
  name         = "highlights"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}
