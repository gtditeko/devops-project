import boto3
import json

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("resume-visitor-count")


def handler(event, context):
    response = table.update_item(
        Key={"id": "visitor-count"},
        UpdateExpression="ADD #count :increment",
        ExpressionAttributeNames={"#count": "count"},
        ExpressionAttributeValues={":increment": 1},
        ReturnValues="UPDATED_NEW",
    )

    count = int(response["Attributes"]["count"])

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps({"count": count}),
    }
