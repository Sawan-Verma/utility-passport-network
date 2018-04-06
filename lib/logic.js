/**
 * Track the switch from one supplier to another
 * @param {org.capita.SwitchSupplier} event To be processed
 * @transaction
 */
function submitSwitch(event) {
    return getAssetRegistry('org.capita.UtilityDetail')
          .then(function (assetRegistry) {
      event.UD.supplierId = event.newSupplier.supplierId;
      event.UD.supplier = event.newSupplier.supplier;
      return assetRegistry.update(event.UD);
          })
  }