/*
 * @Author: Lavender
 * @Date: 2021-12-14 20:14:27
 * @LastEditors: Lavender
 * @LastEditTime: 2022-03-26 16:08:15
 * @Description: 导入xml信息
 * @FilePath: /bpmn_workflow/src/mock/xmlStr.js
 */

// TODO 改成从后端读取xml
export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="rtdtrdt" isExecutable="false">
    <task id="Docker_0pizbzq" custom="1" image="platform-frontend:0.1.1-master-11">
      <outgoing>Flow_1y469ct</outgoing>
    </task>
    <task id="Docker_19t1frr" custom="1" image="platform-frontend:0.1.2-master-12">
      <outgoing>Flow_19iz00e</outgoing>
    </task>
    <task id="Suspend_04pttkt" custom="3">
      <incoming>Flow_0s5ktrg</incoming>
      <incoming>Flow_19iz00e</incoming>
      <outgoing>Flow_03d5zed</outgoing>
    </task>
    <task id="Pythonscript_1ae4mn9" custom="2">
      <incoming>Flow_1y469ct</incoming>
      <outgoing>Flow_0s5ktrg</outgoing>
    </task>
    <sequenceFlow id="Flow_1y469ct" sourceRef="Docker_0pizbzq" targetRef="Pythonscript_1ae4mn9" />
    <sequenceFlow id="Flow_0s5ktrg" sourceRef="Pythonscript_1ae4mn9" targetRef="Suspend_04pttkt" />
    <sequenceFlow id="Flow_19iz00e" sourceRef="Docker_19t1frr" targetRef="Suspend_04pttkt" />
    <task id="Pythonscript_0h416eb" custom="3">
      <incoming>Flow_03d5zed</incoming>
    </task>
    <sequenceFlow id="Flow_03d5zed" sourceRef="Suspend_04pttkt" targetRef="Pythonscript_0h416eb" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="rtdtrdt">
      <bpmndi:BPMNEdge id="Flow_03d5zed_di" bpmnElement="Flow_03d5zed">
        <di:waypoint x="684" y="340" />
        <di:waypoint x="876" y="340" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_19iz00e_di" bpmnElement="Flow_19iz00e">
        <di:waypoint x="434" y="160" />
        <di:waypoint x="565" y="160" />
        <di:waypoint x="565" y="354" />
        <di:waypoint x="636" y="354" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0s5ktrg_di" bpmnElement="Flow_0s5ktrg">
        <di:waypoint x="544" y="460" />
        <di:waypoint x="590" y="460" />
        <di:waypoint x="590" y="350" />
        <di:waypoint x="636" y="350" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1y469ct_di" bpmnElement="Flow_1y469ct">
        <di:waypoint x="344" y="430" />
        <di:waypoint x="420" y="430" />
        <di:waypoint x="420" y="470" />
        <di:waypoint x="496" y="470" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Docker_0pizbzq_di" bpmnElement="Docker_0pizbzq">
        <omgdc:Bounds x="296" y="406" width="48.00001" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Docker_19t1frr_di" bpmnElement="Docker_19t1frr">
        <omgdc:Bounds x="386" y="136" width="48.00001" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Suspend_04pttkt_di" bpmnElement="Suspend_04pttkt">
        <omgdc:Bounds x="636" y="316" width="48" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Pythonscript_1ae4mn9_di" bpmnElement="Pythonscript_1ae4mn9">
        <omgdc:Bounds x="496" y="436" width="48" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Pythonscript_0h416eb_di" bpmnElement="Pythonscript_0h416eb">
        <omgdc:Bounds x="876" y="316" width="48" height="48" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`