class ContactInfoController {
    constructor(data) {
        this.data = data;
    }

    async getAllContactInfo() {
        let allContactInfo = await this.data.contactInfo.getAll();
        allContactInfo = await Promise.all(allContactInfo
            .map(async (contact) => {
                const {
                    userName,
                } =
                await this.data.users.getById(contact.UserId);
                contact.dataValues.userName = userName;
                return contact.dataValues;
            }));
        console.log(allContactInfo);
        return allContactInfo;
    }
    async getPrimaryAddress(condition = 'oldest') {
        const allContactInfo = await this.getAllContactInfo();
        let primaryAddresses = [];
        allContactInfo.map((contact) => {
            if (contact.isPrimary) {
                primaryAddresses.push(contact);
            }
        });
        if (primaryAddresses.length > 1) {
            if (condition === 'oldest') {
                primaryAddresses = primaryAddresses
                    .sort((a, b) => a.createdAt - b.createdAt);
            } else {
                primaryAddress = primaryAddress
                    .sort((a, b) => b.createdAt - a.createdAt);
            }
        }
        const primaryAddress = primaryAddresses[0];
        return primaryAddress;
    }

    async createNewContact(contactObject) {
        const keys = Object.keys(contactObject);
        keys.forEach((key) => {
            if (key !== 'id' ||
                key !== 'name' ||
                key !== 'value' ||
                key !== 'icon' ||
                key !== 'isPrimary' ||
                key !== 'createdAt' ||
                key !== 'updatedAt' ||
                key !== 'UserId') {
                throw new Error('All fields are mandatory!');
            }
        });
        const newContact = this.data.contactInfo.create(contactObject);
        return newContact;
    }
}

module.exports = ContactInfoController;
