import supportedBrowser, { isBrowserSupported } from './index';

test(`should should 'pass' for valid browser`, () => {
  const supported = {
    browsers: [
      {
        browser: 'chrome',
        version: '42',
      },
    ],
    required: false,
  };
  expect(supportedBrowser('pass', 'fail', supported)).toBe('pass');
});

test(`should should 'fail' for valid browser`, () => {
  const supported = {
    browsers: [
      {
        browser: 'chrome',
        version: '42',
      },
    ],
    required: true,
  };
  expect(supportedBrowser('pass', 'fail', supported)).toBe('fail');
});

describe('should handle different versions and supported browsers', () => {
  it('should show true on valid browser', () => {
    const supported = {
      browsers: [
        {
          browser: 'chrome',
          version: '42',
        },
      ],
      required: true,
    };
    expect(
      isBrowserSupported(supported, {
        name: 'chrome',
        version: '42.321.12.1',
      })
    ).toBe(true);
  });

  it('should show false on valid browser', () => {
    const supported = {
      browsers: [
        {
          browser: 'chrome',
          version: '42',
        },
      ],
      required: true,
    };
    expect(
      isBrowserSupported(supported, {
        name: 'chrome',
        version: '41.555.2.1',
      })
    ).toBe(false);
  });

  it('should show false on valid browser', () => {
    const supported = {
      browsers: [
        {
          browser: 'chrome',
          version: '42',
        },
      ],
      required: true,
    };
    expect(
      isBrowserSupported(supported, {
        name: 'someweirdbrowser',
        version: '41',
      })
    ).toBe(false);
  });

  it('should show false on valid browser', () => {
    const supported = {
      browsers: [
        {
          browser: 'chrome',
          version: '*',
        },
      ],
      required: true,
    };
    expect(
      isBrowserSupported(supported, {
        name: 'chrome',
        version: '1',
      })
    ).toBe(true);
  });

  it('should show false on valid browser', () => {
    const supported = {
      browsers: [
        {
          browser: 'chrome',
          version: '*',
        },
      ],
      required: false,
    };
    expect(
      isBrowserSupported(supported, {
        name: 'someweirdbrowser',
        version: '1',
      })
    ).toBe(true);
  });
});
