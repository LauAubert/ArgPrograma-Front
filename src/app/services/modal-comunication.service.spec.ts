import { TestBed } from '@angular/core/testing';

import { ModalComunicationService } from './modal-comunication.service';

describe('ModalComunicationService', () => {
  let service: ModalComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
