import { Button } from '@sehee/ui';
import { DescriptionComponent } from '../components/description-component';

export const ButtonPage = () => (
  <DescriptionComponent componentName="Button" descrption="button">
    <Button onClick={() => console.log('Jane Doe')}>Jane Doe</Button>
    <Button variant="outline" onClick={() => console.log('Jane Doe')}>
      Jane Doe
    </Button>
  </DescriptionComponent>
);
