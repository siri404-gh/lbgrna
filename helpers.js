import moment from 'moment';
import merchantList from './merchantList';

export const transform = txns => txns.length ? txns.filter(txn => txn.money_out).map(txn => ({
    amount: txn.money_out,
    time: getDateValue(txn),
    type: txn.payment_type,
    keyword: getKeyword(txn.description),
  })) : [];
  
  const contains = (description, name) => description.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  
  const getDateValue = txn => moment(txn.date).unix() * 1000;
  
  const getKeyword = description => {
    merchantList.forEach(merchant => merchant.forEach(merchantName => {
      if(contains(description, merchantName)) return merchant[0];
    }));
    return description.toLowerCase();
  };