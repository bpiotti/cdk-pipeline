#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/pipeline/cdk-pipeline-stack';
import { PIPELINE_CONFIGURATION, DeploymentEnvrionment } from '../configuration/pipeline-config';

const app = new cdk.App();
const pipelineStage : DeploymentEnvrionment = PIPELINE_CONFIGURATION.pipelineStage;
new CdkPipelineStack(app, 'CdkPipelineStack', {
  env: {account: pipelineStage.account, region: pipelineStage.region}
})

// Generate CDK Cloud Assembly
app.synth();