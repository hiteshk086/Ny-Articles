# NY Times Most Popular Articles - Setup Guide

## Quick Start Guide

### 1. Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd nytimes-articles

# Install all required packages
npm install
```

### 2. Configure Environment

```bash
# Create .env file
echo "REACT_APP_NY_TIMES_API_KEY=your_api_key_here" > .env

# Replace with your API key from https://developer.nytimes.com/
```

### 3. Run the Application

```bash
# Start development server
npm start

# Application will run on http://localhost:3000
```

## Testing Instructions

### Unit Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- ArticleList.test.jsx
```

### Generate Coverage Reports

```bash
# Generate coverage report
npm test -- --coverage

# Coverage report will be available in:
# ./coverage/lcov-report/index.html
```

### Code Coverage Requirements

- Minimum coverage thresholds:
  - Statements: 80%
  - Branches: 80%
  - Functions: 80%
  - Lines: 80%

### End-to-End Tests

```bash
# Open Cypress Test Runner
npm run cypress:open

# Run Cypress tests headlessly
npm run cypress:run
```

## Available Scripts

### Development

```bash
# Start development server
npm start

# Build for production
npm run build
```

### Testing

```bash
# Run unit tests
npm test

# Generate coverage report
npm test -- --coverage

# Run E2E tests
npm run cypress:open
```

### Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## Troubleshooting Common Issues

### Test Coverage Issues

If coverage reports are not generating:

1. Clear Jest cache:
   ```bash
   npm test -- --clearCache
   ```
2. Ensure no tests are being skipped:
   ```bash
   npm test -- --verbose
   ```

### Test Execution Issues

If tests are failing:

1. Check Node version:
   ```bash
   node --version  # Should be v14 or higher
   ```
2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```
3. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

### Coverage Report Location

Coverage reports can be found in:

- HTML: `./coverage/lcov-report/index.html`
- JSON: `./coverage/coverage-final.json`
- Text: `./coverage/lcov.info`

## Verifying Setup Success

### 1. Check Application

- Open http://localhost:3000
- Should see articles list
- Should be able to click and view article details

### 2. Verify Tests

```bash
# Should all pass
npm test

# Should show coverage above thresholds
npm test -- --coverage
```

### 3. Verify Build

```bash
# Should create build folder
npm run build
```
