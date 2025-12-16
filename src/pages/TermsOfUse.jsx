import React from 'react';
import { FileText, Scale, Globe, AlertCircle, ExternalLink } from 'lucide-react';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6">
                            <Scale className="w-10 h-10 text-orange-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                            Terms and Conditions
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Guidelines governing the use of the Odisha AI Portal and its services.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="max-w-4xl mx-auto space-y-8">

                    {/* General Disclaimer Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-orange-50 rounded-xl">
                                    <FileText className="w-6 h-6 text-orange-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">General Terms</h2>
                            </div>
                            <div className="prose prose-orange max-w-none text-gray-600 space-y-4 leading-relaxed">
                                <p>
                                    This website is designed, developed and maintained by Electronics & Information Technology Department Govt. of Odisha. Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes.
                                </p>
                                <p>
                                    In case of any ambiguity or doubts, users are advised to verify/check with the Ministry and/or other source(s), and to obtain appropriate professional advice.
                                </p>
                                <p>
                                    Under no circumstances will this Ministry be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.
                                </p>
                                <p>
                                    These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* External Links Policy Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-xl">
                                    <Globe className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">External Links Policy</h2>
                            </div>

                            <div className="space-y-6 text-gray-600">
                                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                    <p className="leading-relaxed">
                                        The information posted on these website could include hypertext links or pointers to information created and maintained by non-Government/private organizations. Electronics & Information Technology Department Govt. of Odisha is providing these links and pointers solely for your information and convenience.
                                    </p>
                                </div>

                                <ul className="space-y-4 list-none pl-0">
                                    <li className="flex gap-3">
                                        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                        <span>
                                            When you select a link to an outside website, you are leaving the Electronics & Information Technology Department Govt. of Odisha website and are subject to the privacy and security policies of the owners/sponsors of the outside website.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                        <span>
                                            Electronics & Information Technology Department Govt. of Odisha, does not guarantee the availability of such linked pages at all times.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                        <span>
                                            Electronics & Information Technology Department Govt. of Odisha, cannot authorise the use of copyrighted materials contained in linked websites. Users are advised to request such authorisation from the owner of the linked website.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                                        <span>
                                            Electronics & Information Technology Department Govt. of Odisha, does not guarantee the linked websites comply with Indian Government Web Guidelines.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Source Link */}
                    <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-500 border-t border-gray-200 mt-12 mb-8">
                        <a href="https://it.odisha.gov.in/en/terms-and-conditions-35" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors flex items-center gap-2">
                            Source: it.odisha.gov.in <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
