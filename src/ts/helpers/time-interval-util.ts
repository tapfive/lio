import { TimeInterval } from "../enums/time-interval";
import { TimeIntervalUnit } from "../enums/time-interval-unit";

export default {
  getIntervals: function(): TimeInterval[] {
    return [
      TimeInterval.ONE_HOUR,
      TimeInterval.TWELVE_HOURS,
      TimeInterval.ONE_DAY,
      TimeInterval.ONE_WEEK,
      TimeInterval.ONE_MONTH,
      TimeInterval.THREE_MONTHS,
      TimeInterval.SIX_MONTHS,
      TimeInterval.ONE_YEAR
    ];
  },

  getUnit: function(interval: TimeInterval): TimeIntervalUnit {
    switch (interval) {
      case TimeInterval.ONE_HOUR: {
        return TimeIntervalUnit.MINUTES;
      }
      case TimeInterval.TWELVE_HOURS:
      case TimeInterval.ONE_DAY: {
        return TimeIntervalUnit.HOURS;
      }
      default: {
        return TimeIntervalUnit.DAYS;
      }
    }
  },

  getAmount: function(interval: TimeInterval): number {
    switch (interval) {
      case TimeInterval.ONE_HOUR: {
        return 60;
      }
      case TimeInterval.TWELVE_HOURS: {
        return 12;
      }
      case TimeInterval.ONE_DAY: {
        return 24;
      }
      case TimeInterval.ONE_WEEK: {
        return 7;
      }
      case TimeInterval.ONE_MONTH: {
        return 30;
      }
      case TimeInterval.THREE_MONTHS: {
        return 90;
      }
      case TimeInterval.SIX_MONTHS: {
        return 180;
      }
      case TimeInterval.ONE_YEAR: {
        return 365;
      }
    }
  }
};
