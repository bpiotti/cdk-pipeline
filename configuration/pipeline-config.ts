import { Environment } from "aws-cdk-lib";

export class Domain {
    static readonly BETA = new Domain('beta');
    static readonly GAMMA = new Domain('gamma');
    static readonly PROD = new Domain('prod');

    readonly name : string;
    
    private constructor(name: string) {
        this.name = name
    }
}

export interface DeploymentStage extends Environment {
    domain: Domain
}

// Define list of pipeline stages here
export const STAGES : DeploymentStage[] = [
    {domain: Domain.BETA, account: process.env.DEV_ACCOUNT_ID!, region: 'us-east-2'}
]