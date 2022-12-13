import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate string', () => {
    let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eos, commodi facilis consequatur fugiat id magni ipsa, at rem a animi aliquam necessitatibus iure molestiae dolorum! Qui rerum magni asperiores?'
    let limit = 5
    
    expect(pipe.transform(text, limit)).toBe("Lorem...");
  });
});
