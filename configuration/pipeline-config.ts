export enum StageDomain {
    ALPHA,
    BETA,
    PROD
}

export interface DeploymentEnvrionment {
    domain: StageDomain
    account: string
    region: string
}

interface PipelineConfigration {
    pipelineStage: DeploymentEnvrionment // The Deployment Environment which contains the actual pipeline stack
    stages: DeploymentEnvrionment[] // List of environments to deploy the service stack
}

const stages : DeploymentEnvrionment[] = [
    {domain: StageDomain.ALPHA, account: process.env.DEV_ACCOUNT_ID!, region: 'us-east-2'}
]

export const PIPELINE_CONFIGURATION : PipelineConfigration = {
    pipelineStage: stages[0],
    stages: stages
} 