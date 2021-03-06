module.exports = {
	DATA_FORMAT: {
		KEY_MAPPING: {
			MIXIN: {
				'Flavour': ['name'],
				'Hot drinks': null,
				'Kilojules': ['nutritionalInformation', 'kilojoules'],
				'Limited edition': ['specialAttributes', 'isLimitedEdition']
			},
			PRODUCT: {
				'Category': ['type'],
				'Tea type': ['subtype'],
				'Flavour': ['flavour'],
				'Size': ['servingSize', 'storeSize'],
				'Kilojules': ['nutritionalInformation']['kilojoules'],
				'Contains sugar': null,
				'Limited edition': ['specialAttributes', 'isLimitedEdition']
			},
			RESTRICTION: {
				'Category': ['type'],
				'Can change tea type': ['canModify', 'type'],
				'Can change size': ['canModify', 'servingSize', 'storeSize'],
				'Can add mix-ins': ['canModify', 'customMixin'],
				'Can change ice': ['canModify', 'baseMixin' , 'ice'],
				'Can change sugar': ['canModify', 'baseMixin', 'sugar'],
				'Can change flavour': ['canModify', 'flavour']
			},
			CATEGORY: {
				'Category': ['type']
			},
			SIZE: {
				'Size': ['servingSize', 'storeSize']
			},
			TYPE: {
				'Tea type': ['subtype']
			},
			FLAVOUR: {
				'Flavour': ['flavour'],
				'Milky': ['appliesTo', 'type', 'Milky'],
				'Hot Milky': ['appliesTo', 'type', 'Hot Milky'],
				'Fresh': ['appliesTo', 'type', 'Fresh'],
				'Hot Fresh': ['appliesTo', 'type', 'Hot Fresh'],
				'Fruity': ['appliesTo', 'type', 'Fruity'],
				'Frozen': ['appliesTo', 'type', 'Frozen'],
				'Sparkling': ['appliesTo', 'type', 'Sparkling']
			}
		}
	}
}