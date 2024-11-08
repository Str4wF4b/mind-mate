import { FadeHeaderDirective } from './fade-header.directive';
import { DomController } from '@ionic/angular';

describe('FadeHeaderDirective', () => {
  let domController: DomController;

  beforeEach(() => {
    domController = jasmine.createSpyObj('DomController', ['write', 'read']);
  })

  it('should create an instance', () => {
    const directive = new FadeHeaderDirective(domController);
    expect(directive).toBeTruthy();
  });
});