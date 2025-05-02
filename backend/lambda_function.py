import json
import boto3
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    #Get Table
    table=dynamodb.Table('cloudresume-visitor-counter')
    response = table.get_item(
        Key={
            'counter_id':1
        }
    )

    #Update Table
    table.update_item(
        Key={
            'counter_id':1
        },
        UpdateExpression='SET visitor_count = visitor_count + :val',
        ExpressionAttributeValues={
            ':val':1
        }
    )

    item=response['Item']
    return (item)
