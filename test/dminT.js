    it('should emit log on success', async () => {
      expect(await send(comptroller, '_setPendingAdmin', [accounts[0]])).toSucceed();
      const result = await send(comptroller, '_acceptAdmin', [], {from: accounts[0]});
      expect(result).toHaveLog('NewAdmin', {
        oldAdmin: root,
        newAdmin: accounts[0],
      });
      expect(result).toHaveLog('NewPendingAdmin', {
        oldPendingAdmin: accounts[0],
        newPendingAdmin: address(0),
