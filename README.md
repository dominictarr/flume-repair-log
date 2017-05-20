# flume-repair-log

A tool for copying a log from one format to another,
or to repair a broken log.

## usage

```
npm install -g flume-repair-log
cd ~/.ssb/flume
# backup current log
cp log.offset ~/log.offset.backup
#clear views
rm -rf */* *.json
# now you should have a directory containing only
# some empty directories and a log.offset file
# run this script
flume-repair-log log.offset
# it will print a bunch of messages as it progresses
# when it exits
mv log.offset~ log.offset
```
now you are using `flumelog-offset@3`!


## License

MIT

