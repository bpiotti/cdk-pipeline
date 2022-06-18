import { Stack, StackProps } from "aws-cdk-lib";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { DeploymentEnvrionment } from "../../configuration/pipeline-config";
import * as path from 'path';

export class ServiceStack extends Stack {
    constructor(scope: Construct, id: string, env: DeploymentEnvrionment, props: StackProps) {
        super(scope, id, props);

        // Simple Lambda Function
        new Function(this, 'ServiceLambda', {
            runtime: Runtime.NODEJS_14_X,
            handler: 'entrypoint.handler',
            code: Code.fromAsset(path.resolve(__dirname, '../lambda'))
        })
    }
}