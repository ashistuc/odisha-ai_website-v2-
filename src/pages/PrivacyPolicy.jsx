import React from 'react';
import { Shield, Lock, Globe, ExternalLink } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6">
                            <Shield className="w-10 h-10 text-orange-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                            Website Policy
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Our commitment to transparency, security, and your privacy while using the Odisha AI Portal.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="max-w-4xl mx-auto space-y-8">

                    {/* Copyright Policy Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-orange-50 rounded-xl">
                                    <Globe className="w-6 h-6 text-orange-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">1. Copyright Policy</h2>
                            </div>
                            <div className="prose prose-orange max-w-none text-gray-600 space-y-4 leading-relaxed">
                                <p>
                                    Material featured on this Website may be reproduced free of charge after taking proper permission by sending a mail to us. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context.
                                </p>
                                <p>
                                    Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorisation to reproduce such material must be obtained from the departments/copyright holders concerned.
                                </p>
                                <p>
                                    These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hyperlinking Policy Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <ExternalLink className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">2. Hyperlinking Policy</h2>
                            </div>

                            <div className="space-y-8 text-gray-600">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        Links to external websites/portals
                                    </h3>
                                    <p className="leading-relaxed">
                                        At many places in this Website, you shall find links to other websites/portals. This links have been placed for your convenience. Department is not responsible for the contents and reliability of the linked websites and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website should not be assumed as endorsement of any kind. We can not guarantee that these links will work all the time and we have no control over availability of linked pages.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        Links to our website by other websites
                                    </h3>
                                    <p className="leading-relaxed">
                                        We do not object to you linking directly to the information that is hosted on this website and no prior permission is required for the same. However, we would like you to inform us about any links provided to this website so that you can be informed of any changes or updations therein. Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to this website must load into a newly opened browser window of the User.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Policy Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-50 rounded-xl">
                                    <Lock className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">3. Privacy Policy</h2>
                            </div>
                            <div className="prose prose-orange max-w-none text-gray-600 space-y-4 leading-relaxed">
                                <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100 mb-6">
                                    <p className="font-medium text-gray-900">
                                        This website does not automatically capture any specific personal information from you, (like name, phone number or e-mail address), that allows us to identify you individually.
                                    </p>
                                </div>
                                <p>
                                    Wherever the Website requests you to provide personal information, you will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect your personal information.
                                </p>
                                <p>
                                    We do not sell or share any personally identifiable information volunteered on the website site to any third party (public/private). Any information provided to this Website will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction.
                                </p>
                                <p>
                                    We gather certain information about the User, such as Internet protocol (IP) addresses, domain name, browser type, operating system, the date and time of the visit and the pages visited. We make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage the site has been detected.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Links */}
                    <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-500 border-t border-gray-200 mt-12 mb-8">
                        <a href="https://it.odisha.gov.in/en/website-policy-41" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors flex items-center gap-2">
                            Source: it.odisha.gov.in <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
