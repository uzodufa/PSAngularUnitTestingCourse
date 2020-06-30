import { MessageService } from "./message.service";

describe('MessageServices', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  })

  it('should have no message to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should be able to add a message when add is called', () => {
    service.add('message');

    expect(service.messages.length).toBe(1);
  });

  it('should remove all message when clear is called', () => {
    service.add('message');

    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
