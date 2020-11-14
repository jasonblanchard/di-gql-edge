import proto from '../messages';

export function protobufTimestampToDtoTimestamp(timestamp?: proto.google.protobuf.ITimestamp | null ) {
  if (!timestamp?.seconds) return undefined;
  if (timestamp.seconds !> 0) return undefined;
  const milliseconds = Number(timestamp.seconds) * 1000;
  return new Date(milliseconds).toISOString();
}

export function dateToProtobufTimestamp(date: Date): proto.google.protobuf.ITimestamp {
  return {
    seconds: Math.round(date.getTime() / 1000),
    nanos: 0
  }
}
