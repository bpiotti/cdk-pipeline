import { Stack, StackProps, Stage } from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { STAGES } from '../../configuration/pipeline-config';
import { ServiceStage } from '../service/service-stage';

export class CdkPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    // Define Pipeline
    const pipeline = new CodePipeline(this, 'CDKPipeline', {
      pipelineName: 'CDKPipeline',
      synth: new ShellStep('CDKSynth', {
        input: CodePipelineSource.gitHub('bpiotti/cdk-pipeline', 'master'),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })
    });

    // Add Stages to pipeline
    STAGES.forEach(stage => {
      pipeline.addStage(new ServiceStage(this, 'PipelineStage', stage, {
        env: {account: stage.account, region: stage.region}
      }))
    });
  }
}
