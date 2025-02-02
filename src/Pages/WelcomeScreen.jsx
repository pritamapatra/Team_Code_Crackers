import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ClipboardList, ChevronRight } from "lucide-react";

const WelcomeScreen = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="mx-auto bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Crime Report System
            </CardTitle>
            <CardDescription className="text-gray-400 text-lg">
              Help keep our community safe by reporting incidents
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Button 
            className="w-full h-16 text-lg relative group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            onClick={() => setScreen("report")}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-6 h-6" />
                <span>Report Crime</span>
              </div>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>

          <Button 
            variant="outline" 
            className="w-full h-16 text-lg relative group border-gray-700 hover:bg-gray-800"
            onClick={() => setScreen("dashboard")}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-6 h-6" />
                <span>View Reports</span>
              </div>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500 pt-6">
          <p>Your reports are anonymous and help make our community safer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WelcomeScreen;