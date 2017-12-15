import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Table from './index.js';
import Button from '../Button';

const stories = storiesOf('Table', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => (<div>
    <Table density="loose" tableLayoutAlgorithm="fixed">
      <Table.THead>
        <Table.TR>
          <Table.TH> Experiment </Table.TH>
          <Table.TH> Conversion Rate </Table.TH>
          <Table.TH> Status </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR>
          <Table.TD> Header CTA </Table.TD>
          <Table.TD width="20%"> 12% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Shorter Contact Form </Table.TD>
          <Table.TD> 4% </Table.TD>
          <Table.TD> Draft </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Larger search bar </Table.TD>
          <Table.TD> 6.7% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Center aligned headline </Table.TD>
          <Table.TD> 9.3% </Table.TD>
          <Table.TD> Running </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </div>)))
  .add('custom tr borders', withInfo()(() => (<div>
    <Table>
      <Table.THead>
        <Table.TR>
          <Table.TH> Experiment </Table.TH>
          <Table.TH> Conversion Rate </Table.TH>
          <Table.TH> Status </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR borderStyle="ends" backgroundColor="faint">
          <Table.TD> Header CTA </Table.TD>
          <Table.TD> 12% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Shorter Contact Form </Table.TD>
          <Table.TD> 4% </Table.TD>
          <Table.TD> Draft </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </div>)))
  .add('loose & rule style', withInfo()(() => (<div>
    <Table density="loose" style="rule" tableLayoutAlgorithm="fixed">
      <Table.THead>
        <Table.TR>
          <Table.TH> Experiment </Table.TH>
          <Table.TH isNumerical={ true }> Conversion Rate </Table.TH>
          <Table.TH> Status </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR>
          <Table.TD> Header CTA </Table.TD>
          <Table.TD isNumerical={ true }> 12% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Shorter Contact Form </Table.TD>
          <Table.TD isNumerical={ true }> 4% </Table.TD>
          <Table.TD> Draft </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Larger search bar </Table.TD>
          <Table.TD isNumerical={ true }> 6.7% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Center aligned headline </Table.TD>
          <Table.TD isNumerical={ true }> 9.3% </Table.TD>
          <Table.TD> Running </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </div>)))
  .add('tight & no bottom border', withInfo()(() => (<div>
    <Table density="tight" style="rule-no-bottom-border" tableLayoutAlgorithm="fixed">
      <Table.THead>
        <Table.TR>
          <Table.TH>Experiment </Table.TH>
          <Table.TH isNumerical={ true }> Conversion Rate </Table.TH>
          <Table.TH> Status </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR>
          <Table.TD> Header CTA </Table.TD>
          <Table.TD isNumerical={ true }> 12% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Shorter Contact Form </Table.TD>
          <Table.TD isNumerical={ true }> 4% </Table.TD>
          <Table.TD> Draft </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Larger search bar </Table.TD>
          <Table.TD isNumerical={ true }> 6.7% </Table.TD>
          <Table.TD> Paused </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD> Center aligned headline </Table.TD>
          <Table.TD isNumerical={ true }> 9.3% </Table.TD>
          <Table.TD> Running </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </div>)))
  .add('dome', withInfo()(() => (<div>
    <Table density="tight" style="wall" tableLayoutAlgorithm="auto">
      <Table.THead>
        <Table.TR>
          <Table.TH> Experiment </Table.TH>
          <Table.TH isNumerical={ true } width="20%" >Conversion Rate </Table.TH>
          <Table.TH isCollapsed={ true }> Status </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR>
          <Table.TD verticalAlign="middle"> Header CTA </Table.TD>
          <Table.TD isNumerical={ true } verticalAlign="middle"> 12% </Table.TD>
          <Table.TD verticalAlign="middle">
            <Button size="small" width="default"> Start </Button>
          </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD verticalAlign="middle"> Shorter Contact Form </Table.TD>
          <Table.TD isNumerical={ true } verticalAlign="middle" > 4% </Table.TD>
          <Table.TD verticalAlign="middle">
            <Button size="small" width="default" > Start </Button>
          </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD verticalAlign="middle"> Larger search bar </Table.TD>
          <Table.TD isNumerical={ true } verticalAlign="middle" > 6.7% </Table.TD>
          <Table.TD verticalAlign="middle">
            <Button size="small" width="default" > Start </Button>
          </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD verticalAlign="middle"> Center aligned headline </Table.TD>
          <Table.TD isNumerical={ true } verticalAlign="middle" > 9.3% </Table.TD>
          <Table.TD verticalAlign="middle">
            <Button size="small" width="default" > Start </Button>
          </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </div>)));
