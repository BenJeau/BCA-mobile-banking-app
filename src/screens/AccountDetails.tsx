import React, { useMemo, useRef, useState } from 'react';
import { Pressable, SectionList, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import PagerView from 'react-native-pager-view';
import LinearGradient from 'react-native-linear-gradient';
import dayjs from 'dayjs';

import {
  AccountOverview,
  BasicListItem,
  Button,
  Text,
  Title,
} from '../components';
import { getAccount, Transaction, transactionsBalance } from '../data/accounts';
import { useChangeNavigationBarColor, useTheme } from '../hooks';

const AccountOverviewTransaction: React.FC<Transaction> = ({
  amount,
  description,
  type,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 12,
        }}>
        {description}
      </Text>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 12,
        }}>
        {type === 'withdraw' && '-'}${amount}
      </Text>
    </View>
  );
};

const AccountDetails: React.FC = ({
  route: {
    params: { id },
  },
}) => {
  const pagerRef = useRef<PagerView>(null);

  const headerHeight = useHeaderHeight();
  const theme = useTheme();
  useChangeNavigationBarColor(theme.colors.background, theme.dark);

  const account = useMemo(() => getAccount(id), [id]);
  const [selectedPage, setSelectedPage] = useState(0);

  // Group transactions by day and into sections
  const sections = useMemo(
    () =>
      account.transactions.reduce<
        {
          title: string;
          data: Transaction[];
        }[]
      >((sections, transaction) => {
        const date = dayjs(transaction.date);
        const section = sections.find(
          ({ title }) => title === date.format('MMMM DD YYYY'),
        );
        if (section) {
          section.data.push(transaction);
        } else {
          sections.push({
            title: date.format('MMMM DD YYYY'),
            data: [transaction],
          });
        }
        return sections;
      }, []),
    [account.transactions],
  );

  return (
    <>
      <View
        style={{
          paddingTop: headerHeight,
          marginHorizontal: 20,
        }}>
        <AccountOverview {...account} />
        {account.type === 'credit' && (
          <Button
            label="Add credit card to Google Pay"
            style={{ backgroundColor: 'black', marginTop: 20 }}
            textStyle={{ color: theme.colors.text }}
          />
        )}
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={() => pagerRef.current?.setPage(0)}
            style={{ opacity: selectedPage === 0 ? 1 : 0.4 }}
            android_ripple={{
              color: theme.colors.background,
            }}>
            <Title>Transactions</Title>
          </Pressable>
          <Pressable
            onPress={() => pagerRef.current?.setPage(1)}
            style={{ opacity: selectedPage === 1 ? 1 : 0.4 }}>
            <Title style={{ marginLeft: 15 }}>Information</Title>
          </Pressable>
        </View>
      </View>
      <PagerView
        ref={pagerRef}
        style={{ flex: 1, flexGrow: 1 }}
        onPageSelected={({ nativeEvent: { position } }) =>
          setSelectedPage(position)
        }
        initialPage={0}>
        <View key="1">
          <SectionList
            sections={sections}
            contentContainerStyle={{
              paddingBottom: 70,
              marginHorizontal: 10,
            }}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <AccountOverviewTransaction {...item} />}
            renderSectionHeader={({ section: { title, data } }) => (
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor: theme.colors.text,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: 10,
                  elevation: 5,
                }}>
                <Text
                  style={{
                    color: theme.colors.background,
                    fontSize: 12,
                  }}>
                  {title}
                </Text>
                <Text
                  style={{
                    color: theme.colors.background,
                    fontSize: 12,
                  }}>
                  {transactionsBalance(data)}
                </Text>
              </View>
            )}
            ListFooterComponent={
              <Button
                label="Load more transactions"
                icon="refresh-fill"
                onPress={() => {}}
                style={{ marginTop: 10 }}
                type="secondary"
              />
            }
            stickySectionHeadersEnabled
          />
          <LinearGradient
            colors={['#00000000', theme.colors.background]}
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              paddingTop: 10,
            }}>
            <Button
              label="Search Transactions"
              icon="search-eye-fill"
              onPress={() => {}}
              style={{
                margin: 10,
                width: undefined,
                borderRadius: 10,
                elevation: 5,
                overflow: 'hidden',
              }}
            />
          </LinearGradient>
        </View>
        <View key="2">
          <BasicListItem text="Features and benefits" />
          <BasicListItem text="Void cheque" />
          <BasicListItem text="Current plan" />
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontFamily: 'Poppins-Bold', marginTop: 20 }}>
              ATM withdrawal limit
            </Text>
            <Text>
              $10,000.00 per month - contact us to increase your limit
            </Text>
          </View>
        </View>
      </PagerView>
    </>
  );
};

export default AccountDetails;
