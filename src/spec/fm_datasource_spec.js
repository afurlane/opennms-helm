import {Datasource} from "../datasources/fault-ds/module";
import Q from "q";

describe('OpenNMSFMDatasource', function() {
  var ctx = {};

  beforeEach(function() {
    ctx.$q = Q;
    ctx.backendSrv = {};
    ctx.templateSrv = {};
    ctx.ds = new Datasource({}, ctx.$q, ctx.backendSrv, ctx.templateSrv);

  });

  it('should return an empty array when no targets are set', function(done) {
    ctx.ds.query({targets: []}).then(function(result) {
      expect(result.data).to.have.length(0);
      done();
    });
  });
});
