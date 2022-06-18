import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { DeploymentEnvrionment } from "../../configuration/pipeline-config";
import { ServiceStack } from "./service-stack";

export class ServiceStage extends Stage {
    constructor(scope: Construct, id: string, env: DeploymentEnvrionment, props?: StageProps) {
        super(scope, id, props);
    
        // Define the stacks t deploy to each stage
        new ServiceStack(this, 'Service', env, {
            env: props?.env
        });
      }
}