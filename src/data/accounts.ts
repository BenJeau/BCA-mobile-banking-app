import faker from 'faker';

export type AccountType = 'checking' | 'savings' | 'credit' | 'loan';

export interface Account {
  id: string;
  type: AccountType;
  name: string;
  balance: string;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  description: string;
  amount: string;
  date: string;
  type: 'withdraw' | 'deposit';
}

export const transactionsBalance = (transactions: Transaction[]): string => {
  const amount = transactions.reduce((acc, curr) => {
    if (curr.type === 'withdraw') {
      return acc - parseFloat(curr.amount);
    }
    return acc + parseFloat(curr.amount);
  }, 0);

  if (amount < 0) {
    return `-$${Math.abs(amount).toFixed(2)}`;
  }

  return `$${amount.toFixed(2)}`;
};

const createTransaction = (): Transaction => ({
  id: faker.datatype.uuid(),
  description: faker.random.words(3),
  amount: faker.finance.amount(0, 10000, 2),
  date: faker.date.recent(30).toISOString(),
  type: faker.datatype.boolean() ? 'withdraw' : 'deposit',
});

const createTransactions = (num: number): Transaction[] =>
  Array.from({ length: num }, () => createTransaction()).sort((a, b) =>
    a.date > b.date ? -1 : 1,
  );

const createAccount = (type: AccountType): Account => {
  const transactions = createTransactions(
    faker.datatype.number({ min: 30, max: 100 }),
  );

  return {
    type,
    balance: transactionsBalance(transactions),
    name: faker.finance.account(),
    id: faker.datatype.uuid(),
    transactions: transactions,
  };
};

const createAccounts = (num: number, type: AccountType): Account[] =>
  Array.from({ length: num }, () => createAccount(type)).sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );

export const accountType: { [key in AccountType]: string } = {
  checking: 'Checking Account',
  savings: 'Savings Account',
  credit: 'Credit Account',
  loan: 'Loan',
};

export const accountsData: { [key: string]: Account[] } = {
  [accountType.checking]: createAccounts(1, 'checking'),
  [accountType.savings + 's']: createAccounts(
    faker.datatype.number({ min: 2, max: 3 }),
    'savings',
  ),
  [accountType.credit + 's']: createAccounts(
    faker.datatype.number({ min: 2, max: 5 }),
    'credit',
  ),
  [accountType.loan + 's']: createAccounts(
    faker.datatype.number({ min: 3, max: 5 }),
    'loan',
  ),
};

export const getAccountType = (type: AccountType): string => accountType[type];

export const getAccount = (id: string): Account => {
  const accounts = Object.values(accountsData).flat();
  return accounts.find(account => account.id === id) as Account;
};
