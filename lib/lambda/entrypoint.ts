import { Context } from 'aws-lambda';

export async function handler(event: any, context: Context) {
    return {
      body: 'Hello from a Lambda Function',
      event: event,
    };
  }