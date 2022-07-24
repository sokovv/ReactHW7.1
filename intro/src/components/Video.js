import Pretty from './Pretty';
import DateTime from "./DateTime";

const DateTimePretty = Pretty(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe title={props.url} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
      <DateTimePretty date={props.date} />
    </div>
  )
}