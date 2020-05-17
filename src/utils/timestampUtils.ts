import proto from '../messages';

export function protobufTimestampToDtoTimestamp(timestamp?: proto.google.protobuf.ITimestamp | null ) {
  if (!timestamp?.seconds) return undefined;
  const milliseconds = Number(timestamp.seconds) * 1000;
  return new Date(milliseconds).toISOString();
}
