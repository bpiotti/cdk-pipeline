#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/pipeline/cdk-pipeline-stack';
import { STAGES, DeploymentStage } from '../configuration/pipeline-config';

const app = new cdk.App();

// Choosing the first stage to host the pipeline
const pipelineStage : DeploymentStage = STAGES[0]; 
new CdkPipelineStack(app, 'CdkPipelineStack', {
  env: {account: pipelineStage.account, region: pipelineStage.region}
});

// Generate CDK Cloud Assembly
app.synth();