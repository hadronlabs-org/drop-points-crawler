# Maintaining MilkyWay Proto Files

All the MilkyWay proto files are defined here. This folder should be synced regularly with
buf.build/milkyway-labs/milkyway regularly by a maintainer by running `buf push` in this folder.

User facing documentation should not be placed here but instead goes in `buf.md` and in each protobuf package following
the guidelines in <https://docs.buf.build/bsr/documentation>.

## Generate

To get the MilkyWay proto given a commit, run:

```bash
buf export buf.build/milkyway-labs/milkyway:${commit} --output .
```
