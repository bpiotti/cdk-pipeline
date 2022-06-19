import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { DeploymentStage } from "../../configuration/pipeline-config";
import { ServiceStack } from "./service-stack";

export class ServiceStage extends Stage {
    constructor(scope: Construct, id: string, stage: DeploymentStage, props?: StageProps) {
        super(scope, id, {
            env: {account: stage.account, region: stage.region}
        });
    
        // Define the stacks t deploy to each stage
        new ServiceStack(this, 'ServiceStack', stage);
      }
}