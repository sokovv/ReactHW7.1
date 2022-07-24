import React from "react";
import moment from 'moment';


export default function Pretty(Component) {
  return class extends React.Component {

    dateModify(date) {
      moment.locale('ru', {
        relativeTime: {
          past: '%s назад',
          s: 'несколько секунд',
          m: 'одна минута',
          mm: function (number) {
            let dec = '';
            return number + ' ' + ((((dec = number % 100) >= 11 && dec <= 19) || (dec = number % 10) >= 5 || dec === 0) ? 'минут' : (dec === 1 ? 'минута' : 'минуты'));;
          },
          h: 'один час',
          hh: function (number) {
            let dec = '';
            return number + ' ' + ((((dec = number % 100) >= 11 && dec <= 19) || (dec = number % 10) >= 5 || dec === 0) ? 'часов' : (dec === 1 ? 'час' : 'часа'));;
          },
          d: 'один день',
          dd: function (number) {
            let dec = '';
            return number + ' ' + ((((dec = number % 100) >= 11 && dec <= 19) || (dec = number % 10) >= 5 || dec === 0) ? 'дней' : (dec === 1 ? 'день' : 'дня'));;
          },
        },
      });
      moment.relativeTimeThreshold('d', 10000);
      return moment(date).fromNow();
    }
    render() {
      return <Component {...this.props} date={this.dateModify(this.props.date)} />
    }
  }
}