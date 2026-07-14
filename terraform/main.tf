terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "devops-project-dev"
}

resource "aws_s3_bucket" "website" {
  bucket = "gabriel-devops-static-site-2026"
}
